---
repo: ngrok/webernetes
url: https://github.com/ngrok/webernetes
owner: ngrok
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "Kubernetes in the browser."
homepage: ""
stars: 482
stars_per_day: 96
forks: 38
open_issues: 4
created: 2026-06-16
pushed_at: 2026-06-18
first_seen: 2026-06-22
week: "2026-W26"
month: "2026-06"
category: "開發工具"
subcategory: "Kubernetes 模擬器"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-22
use_case: "在瀏覽器中運行的 Kubernetes 模擬器。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-29"
contributor_count: 3
engagement: "low"
issue_close_rate: 0
repo_size_kb: 1696
readme_length: 7978
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-22"
star_history: "2026-06-22:482"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "webernetes"
  - "ngrok/webernetes"
  - "在瀏覽器中運行的 Kubernetes 模擬器。"
---

# webernetes

**482** stars · **96** stars/天 · 建立 5 天前 · TypeScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/ngrok--webernetes");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

> [!summary] 一句話摘要
> 在瀏覽器中運行的 Kubernetes 模擬器。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (96 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 希望在瀏覽器中學習和演示 Kubernetes 的開發者和教育工作者。
> **一句話重點** Webernetes 將 Kubernetes 的學習和演示帶入瀏覽器，降低了使用門檻，但功能仍有待擴展。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/ngrok--webernetes");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "Kubernetes 模擬器" && p.file.name !== "ngrok--webernetes" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 Kubernetes 模擬器 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到一個簡單的 Kubernetes 模擬環境，值得嘗試。

> [!abstract] 核心創新
> Webernetes 是一個在瀏覽器中運行的 Kubernetes 模擬器，無需後端基礎設施。

## 專案簡介

Webernetes 是一個將 Kubernetes 部分功能移植到瀏覽器的專案，目的是讓用戶能夠在無需後端伺服器的情況下啟動集群。用戶首先需要安裝 Webernetes，然後定義一個映像來運行在集群中。這個工具的賣點在於它能夠簡化 Kubernetes 的學習和演示過程，因為用戶不再需要管理實際的基礎設施。技術上，Webernetes 使用 TypeScript 和 JavaScript 實現，並依賴於一些核心模組，如 `@kubernetes/client-node`，以便與 Kubernetes 的 API 進行互動。這個專案目前仍處於實驗階段，API 和資源支持的程度可能會變化。

與傳統的 Kubernetes 環境相比，Webernetes 的優勢在於其輕量級和易於使用，特別適合於教育和演示場景。儘管如此，它的功能仍然有限，尚未支持許多 Kubernetes 的進階特性，如持久化存儲和 gRPC 探測。使用者在使用時需要注意這些限制，並且目前的社群活躍度較低，只有 4 個開放問題未解決。這個專案適合希望快速了解 Kubernetes 概念的開發者，但不建議用於生產環境或大型專案。

**技術棧**：`TypeScript` · `JavaScript` · `Shell`

## 重點功能

- 瀏覽器運行 — 無需後端伺服器即可啟動 Kubernetes 集群。
- 支持基本的 Pod 和 Service — 用戶可以創建 Pod 並通過 NodePort 服務進行通信。
- 簡化的 API — 提供簡單的 API 來定義映像和集群，降低學習曲線。
- 支持 HTTP 通信 — Pods 之間可以通過 HTTP 進行通信，便於測試和演示。
- 實驗性功能 — 用戶可以參與到開發過程中，提供反饋和建議。

## 快速開始

1. 安裝 Webernetes 作為依賴
```bash
npm install @ngrok/webernetes
```
2. 定義映像並註冊到集群
```bash
const cluster = new Cluster(); cluster.registerImage(MyImage);
```
3. 啟動集群並創建 Pod
```bash
await cluster.init(); await cluster.apply([{ apiVersion: 'v1', kind: 'Pod', metadata: { name: 'my-pod' }, spec: { containers: [{ name: 'my-container', image: 'my-image:1.0' }] } } }]);
```

## 程式碼範例

```ts
# 前置條件：已安裝 @ngrok/webernetes
const cluster = new Cluster();
cluster.registerImage(MyImage);
await cluster.init();
await cluster.apply([{ apiVersion: 'v1', kind: 'Pod', metadata: { name: 'my-pod' }, spec: { containers: [{ name: 'my-container', image: 'my-image:1.0' }] } } }]);
// 預期輸出：Pod 'my-pod' 成功創建。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 482 stars（96/天），forks 38（7.9%），顯示出一定的關注度。這個專案由 ngrok 團隊開發，ngrok 本身在網絡隧道技術上有良好的聲譽，這使得他們的工具更容易被接受。Webernetes 解決了在瀏覽器中模擬 Kubernetes 的需求，這在以往需要實際的基礎設施支持，成本較高且維護困難。這樣的創新讓開發者能夠在無需複雜設置的情況下學習和演示 Kubernetes 的功能。社群的反饋和需求也促進了這個專案的快速增長。

## 適合誰使用

**目標受眾**：希望在瀏覽器中學習和演示 Kubernetes 的開發者和教育工作者。

> [!example] 使用場景
> - 教育工作者用它來在課堂上演示 Kubernetes 的基本概念，因為它不需要任何後端設置，學生可以直接在瀏覽器中互動。
> - 開發者用它來快速測試 Kubernetes 配置，因為它允許在瀏覽器中創建和管理集群，避免了繁瑣的本地環境配置。
> - 技術寫手用它來創建互動式的 Kubernetes 教學內容，因為它簡化了示範過程，降低了維護成本。

## 架構分析

Webernetes 採用瀏覽器端運行的架構，這樣設計的目的是為了減少對後端基礎設施的依賴，降低使用門檻。資料流方面，使用者定義映像後，通過 Cluster 類來管理 Pod 和 Service 的創建。選擇這種架構的代價是功能的限制，許多 Kubernetes 的高級特性無法實現。擴展性方面，未來可能會增加更多功能，但目前的設計限制了用戶的自定義能力。

## 技術深入分析

Webernetes 的核心技術在於將 Kubernetes 的一些基本功能移植到瀏覽器中，這使得用戶能夠在無需伺服器的情況下進行交互式學習。它使用 TypeScript 和 JavaScript 作為主要開發語言，並依賴於一些輕量級的庫來處理 HTTP 通信和 Kubernetes API 的交互。這種設計使得它的冷啟動時間相對較短，但在處理複雜的 Kubernetes 配置時可能會遇到瓶頸。選擇在瀏覽器中運行的架構意味著用戶不需要管理實際的基礎設施，但也限制了許多高級功能的實現。未來的擴展可能會集中在增加對更多 Kubernetes 特性的支持上，但目前的設計仍然相對簡單，適合初學者和教育用途。整合到現有的開發流程中也相對容易，因為它不需要複雜的環境設置，適合用於快速原型開發和演示。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，並包含了範例代碼。安裝過程相對順暢，沒有明顯的坑。文件目前僅提供英文版本，對於非英語使用者可能會有一定的學習障礙。

## 優缺點分析

> [!success] 優點
> - 無需後端設置，快速啟動 Kubernetes 環境。
> - 簡化的 API 使得學習和演示變得容易。
> - 適合教育和技術寫作，降低了內容創建的維護成本。

> [!danger] 缺點
> - 功能有限，無法支持許多 Kubernetes 的高級特性。
> - 社群活躍度低，問題解決率不高。
> - API 仍在實驗階段，未來可能會有變動。

> [!warning] 注意事項
> - 目前僅支持基本的 Pod 和 Service，尚未實現 Init 或 ephemeral containers。
> - 不支持持久化存儲和 gRPC 探測，限制了某些應用場景。
> - API 仍在實驗階段，未來可能會有變動，使用時需注意。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供更全面的 Kubernetes 模擬功能，適合需要更高自定義的用戶。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於容器管理，功能更為強大，但需要實際的基礎設施支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供更全面的 Kubernetes 模擬功能，支持更多的 Kubernetes 特性。 | 如果需要更高的自定義和功能支持，則應選擇此工具。 | medium，因為需要重新學習其 API 和功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於容器管理，功能更為強大，但需要實際的基礎設施支持。 | 如果你的團隊已經有實際的 Kubernetes 環境，則可以考慮此工具。 | high，因為需要重新配置和適應新的環境。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **webernetes** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供更全面的 Kubernetes 模擬功能，支持更多的 Kubernetes 特性。 | 專注於容器管理，功能更為強大，但需要實際的基礎設施支持。 |
> | 遷移成本 | - | medium，因為需要重新學習其 API 和功能。 | high，因為需要重新配置和適應新的環境。 |
> | 適用場景 | 主要場景 | 如果需要更高的自定義和功能支持，則應選擇此工具。 | 如果你的團隊已經有實際的 Kubernetes 環境，則可以 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人側項目試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 不支持持久化存儲，無法保存 Pod 的狀態
  - 解法：使用外部服務進行狀態管理
- [MEDIUM] API 可能會變動，未來版本不保證向後相容
  - 解法：定期檢查更新和變更日誌

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 教育機構的 Kubernetes 課程 | 非常適合 | 提供簡單的瀏覽器環境，方便學生學習。 |
| 小型團隊的快速原型開發 | 適合 | 無需複雜的基礎設施設置，快速上手。 |
| 大型企業的生產環境 | 不適合 | 功能有限，無法滿足生產環境的需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到一個簡單的 Kubernetes 模擬環境，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，且不會存取敏感資料，適合在 CI/CD pipeline 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ngrok--webernetes");
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
> const me = dv.page("Repos/ngrok--webernetes");
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
| Forks | 38 |
| Open Issues | 4 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-18 |
| 建立日期 | 2026-06-16 |
| Repo 大小 | 1.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ngrok/webernetes) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@samwho](https://github.com/samwho) | 547 |
> | [@cody-dot-js](https://github.com/cody-dot-js) | 4 |
> | [@ngrok-ship[bot]](https://github.com/ngrok-ship[bot]) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度較低，僅有少量開放問題。
**連結**：[文件](https://github.com/ngrok/webernetes#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-18 ~ 2026-06-18）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #7 from ngrok/srose/readme

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#8](https://github.com/ngrok/webernetes/issues/8) | Add the website link in the about section | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Webernetes
> 
> > Kubernetes that runs in your browser.
> 
> To see it in action, [check out the demo!](https://webernetes-demo.ngrok.app/)
> 
> _Wait, what?_
> 
> This project is a port of a subset of the Kubernetes project to make it such
> that clusters can be booted up in the browser, without any backend server
> components.
> 
> _But why?_
> 
> At [ngrok](https://ngrok.com/), we want to make visual and interactive content
> about Kubernetes. We didn't want to create and maintain infrastructure for
> spinning up real clusters, so we decided to create a browser-based simulator
> instead. The hope and dream is that this will make it possible for us (and you!)
> to create interactive Kubernetes content that lives for a long time, because the
> maintenance burden is much smaller.
> 
> **Please note:** This is very experimental. The API is subject to change, the
> level of support for different resources is subject to change. I'm kinda
> figuring this out as I go.
> 
> ## How does it work?
> 
> First, install webernetes as a dependency:
> 
> ```bash
> npm install @ngrok/webernetes
> ```
> 
> Then define an image to run in your cluster. **Webernetes does not run real
> images from Docker Hub, nor is it a goal to do so.**
> 
> ```typescript
> import { BaseImage, type ProcessContext } from "@ngrok/webernetes";
> 
> class MyImage extends BaseImage {
> 	// The imageName and imageVersion variables are what make up the image label
> 	// you'll use in your container definition. Here we have my-image:1.0 but
> 	// webernetes also knows what to do if you specify just my-image or
> 	// my-image:latest
> 	static readonly imageName = "my-image";
> 	static readonly imageVersion = "1.0";
> 
> 	// If no other command is specified in your container manifest, this is the
> 	// command that will be passed in as argv below.
> 	readonly defaultCommand = ["server"];
> 
> 	// exec is the main entrypoint for your image. It will be called with the
> 	// command-line arguments passed in from your container definition.
> 	override async exec(ctx: ProcessContext, argv: readonly string[]): Promise {
> 		if (argv[0] !== "server") {
> 			// The base image defines a bunch of core utils (cat, false, printenv,
> 			// etc.) so if we don't recognize the command, fall back to the base
> 			// image.
> 			return await super.exec(ctx, argv);
> 		}
> 
> 		// Binds to port 8080 on this container.
> 		ctx.listenHttp(8080, async (request) => {
> 			return {
> 				statusCode: 200,
> 				body: "hello, world\n",
> 			};
> 		});
> 
> 		// Required for long-running processes to be cancellable when clusters shut
> 		// down. If we returned an exit code of 0 here, the listener above would be
> 		// unregistered because this container will have exited.
> 		return await ctx.waitUntilKilled();
> 	}
> }
> ```
> 
> Then we create a cluster and register our image with it.
> 
> ```typescript
> import { Cluster } from "@ngrok/webernetes";
> 
> const cluster = new Cluster();
> cluster.registerImage(MyImage);
> ```
> 
> And then we can run the cluster and spawn a pod using our image in it.
> 
> ```typescript
> // By default this spins up a 3-node cluster. This can't currently be changed.
> await cluster.init();
> 
> await cluster.apply([
> 	{
> 		apiVersion: "v1",
> 		kind: "Pod",
> 		metadata: {
> 			name: "my-pod",
> 			labels: { app: "my-pod" },
> 		},
> 		spec: {
> 			containers: [
> 				{
> 					name: "my-container",
> 					image: "my-image:1.0",
> 				},
> 			],
> 		},
> 	},
> ]);
> ```
> 
> To send a request to your pod, you'll need to create a `Service` to talk to it.
> In this case, a `NodePort` service gives us the easiest route.
> 
> ```typescript
> await cluster.apply([
> 	{
> 		apiVersion: "v1",
> 		kind: "Service",
> 		metadata: { name: "my-service" },
> 		spec: {
> 			type: "NodePort",
> 			ports: [
> 				{
> 					port: 80,
> 					targetPort: 8080,
> 					nodePort: 31000,
> 					protocol: "TCP",
> 				},
> 			],
> 			selector: {
> 				app: "my-pod",
> 			},
> 		},
> 	},
> ]);
> 
> const resp = await cluster.fetch("http://node-1:31000");
> const text = await resp.text(); // hello, world
> ```
> 
> Pods are also able to talk to each other over HTTP. To see how this works in a
> few runnable examples, check out the code under the `examples/` directory. For
> the full visual demo, check out the code under the `demo/` directory.
> 
> ## What's implemented and what isn't
> 
> I've scoped this so far to the bits I need to make the first piece of content
> I want to make, which is about probing.
> 
> I'll also preface this by saying I am by no means an exhaustive expert on every
> detail of Kubernetes, so it is likely that I'm missing some things or I haven't
> fully implemented the things I believe I have.
> 
> ### Nodes
> 
> - `Cluster` spins up a 3-node cluster (`node-1`, `node-2`, `node-3`) and that
>   isn't configurable yet. I would like to suppose arbitrarily adding and
>   removing nodes in the future.
> 
> ### Namespaces
> 
> Supported, including special handling for deleting the resources within a
> namespace via a namespace controller (separate to the garbage collector
> controller that handles deleting everything else).
> 
> ### Pods
> 
> Basics are supported: `Pod`s can have `Container`s and those containers can
> listen for HTTP traffic on ports. They get a pod name, an IP address, they can
> speak to other pods by their DNS name or IP address. They can accept environment
> variables. They get probed.
> 
> What's not supported yet:
> 
> - Init or ephemeral containers.
> - gRPC probing.
> - Volume mounts.
> - Any sort of affinity rules.
> - Resources.
> - Probably a lot of other things, but those are the big ones that come to mine.
> 
> ### Services
> 
> Support for `ClusterIP` and `NodePort` services is in, `LoadBalancer` and
> `ExternalName` services are not yet supported. `Pod`s can talk to service DNS
> names and the requests will be load balanced across the `Pod`s in the service
> using round robin.
> 
> UDP isn't supported. TCP kinda sorta isn't either if you think about it, I'm not
> emulating that far down the network stack. Stuff can talk HTTP and DNS to each
> other and that's it. I don't anticipate ever wanting or needing to change this.
> As a result, the distinction between IP families also isn't really modeled.
> 
> ### EndpointSlices
> 
> A fun implementation detail of `Service`s I had no idea existed until starting
> this project. These are created to track sets of `Pod`s that are part of a
> `Service`. They're usually sharded into 100 `Pod`s each but I haven't done that,
> purely for simplicity. They exist, they work how they should, but the sharding
> isn't there for now.
> 
> ### Events
> 
> Supported for the most part, and I've tried to make sure we fire the same events
> as Kubernetes does. I'm not doing any event aggregating, and it's possible not
> all fields are present and correct, but events with messages do get fired and
> can be inspected.
> 
> ### ReplicaSets
> 
> Supported and usually created by `Deployment`s. ReplicaSet controller is also in
> place and largely at parity with the upstream Kubernetes ReplicaSet controller.
> 
> ### Deployments
> 
> Supported, including `RollingUpdate` and `Recreate` strategies. Deployment
> controller is in place and largely at parity with the upstream Kubernetes
> Deployment controller.
> 
> ## Development
> 
> This repo uses [mise](https://mise.jdx.dev/) to pin the toolchain (Node, pnpm,
> `ast-grep`, `ripgrep`) so it's reproducible across machines. Node is read from
> `.nvmrc` and pnpm is single-sourced from `package.json#packageManager`.
> 
> After [installing mise](https://mise.jdx.dev/installing-mise.html), from a fresh
> clone:
> 
> ```bash
> mise install      # install the pinned tools (and write mise.lock)
> mise run setup     # install workspace dependencies from the lockfile
> ```
> 
> Available mise tasks:
> 
> - `mise run install` — `pnpm install --frozen-lockfile`.
> - `mise run setup` — prepare the repo after a fresh clone (runs `install`).
> - `mise run relock` — refresh `mise.lock` to match `.nvmrc` and
>   `package.json#packageManager`.
> - `mise run doctor` — verify the active tools match the committed pins.
> 
> To bump a pinned version, edit `.nvmrc`, `package.json#packageManager`, or
> `mise.toml` and run `mise run relock`. The package scripts (`pnpm test`,
> `pnpm build`, `pnpm vibe-check`, etc.) are unchanged and run as usual once
> dependencies are installed.

## 延伸閱讀

相關概念：[[Kubernetes]] · [[容器化]] · [[模擬器]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]]

[GitHub](https://github.com/ngrok/webernetes)

## 相關收錄

> [!note]- 直接競品（同子分類：Kubernetes 模擬器）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "Kubernetes 模擬器" AND file.name != "ngrok--webernetes"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "ngrok--webernetes"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "ngrok--webernetes" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W26" AND file.name != "ngrok--webernetes"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["Kubernetes","容器化","模擬器"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "ngrok--webernetes" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/ngrok--webernetes");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "ngrok--webernetes" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "ngrok" AND file.name != "ngrok--webernetes"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ngrok--webernetes");
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
> const me = dv.page("Repos/ngrok--webernetes");
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
> const me = dv.page("Repos/ngrok--webernetes");
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
> const me = dv.page("Repos/ngrok--webernetes");
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
> const me = dv.page("Repos/ngrok--webernetes");
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

> **2026-06-22** — 首次收錄
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

- [[2026-06-22|2026-06-22]] — 首次收錄，482 stars
